const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const fs = require('fs');
const path = require('path')

const defaultJson = require('../config/default.json')
const client = require('../services/object-storage')

const discovery = new DiscoveryV1({
    username: '3afcc220-9104-45ad-a761-ea6b8f114108',
    password: 'K26GqFlz73U7',
    version_date: '2017-11-07'
});

function ApisWatsonController() {

    this.pegarVideo = (req, res, next) => {

        console.log(req.body.data)

        let document_obj = {
            environment_id: '82e4652e-e050-445a-8576-e8b09642e6e2',
            collection_id: '3af14411-288c-45d8-bffb-bdf3705cd3eb',
            query: req.body.data
        };

        discovery.query(document_obj, (error, data) => {

            if (error) {

                console.log(error)
                res.status(401).json(error)
            }

            console.log(JSON.stringify(data, null, 2));
            res.status(200).json(data)
        });
    }

    this.uploadToDiscovery = async (req, res, next) => {

        let audios = fs.readdirSync('./audios/')

        for(let audio in audios) {

            await transformToText(audios[audio])
        }
    }

    this.deleteDocument = (req, res, next) => {

        let document_obj = {
            environment_id: '82e4652e-e050-445a-8576-e8b09642e6e2',
            collection_id: '3af14411-288c-45d8-bffb-bdf3705cd3eb',
            document_id: '2ac496e0-322f-41c7-a93f-039367a48e12'
        };
        
        discovery.deleteDocument(document_obj, (error, data) => {

            console.log(JSON.stringify(data, null, 2));
        });
    }

    function transformToText(audio) {

        return new Promise((resolve, reject) => {

            const speech_to_text = new SpeechToTextV1 ({
                username: '5965e3a4-1985-42d7-9930-588be15f1cea',
                password: '8YciDWIzk2cq',
                version: 'v1'
            });

            let params = {
                model: 'en-US_BroadbandModel',
                audio: fs.createReadStream('audios/' + audio),
                content_type: 'audio/mp3',
                timestamps: true,
                word_alternatives_threshold: 0.9,
                keywords: ['colorado', 'tornado', 'tornadoes'],
                keywords_threshold: 0.5
            };

            // Create the stream.
            let recognizeStream = speech_to_text.createRecognizeStream(params);
            
            // Pipe in the audio.
            console.log(fs.createReadStream('audios/' + audio).path)
            fs.createReadStream('audios/' + audio).pipe(recognizeStream);

            // Pipe out the transcription to a file.
            let fileName = audio.substring(0, audio.length - 4);
            
            // Get strings instead of buffers from 'data' events.
            recognizeStream.setEncoding('utf8');
            
            // Listen for events.
            recognizeStream.on('results', function(event) {
                
                // recognizeStream.pipe(fs.createWriteStream(path.join(__dirname, `../texts/${fileName}.json`)));
                fs.writeFile(path.join(__dirname, `../texts/${fileName}.json`), JSON.stringify(event), (err, data) => {

                    if (err) return

                    onEvent('Results:', event);
                });
            });
            recognizeStream.on('data', function(event) {

                onEvent('Data:', event);
            });
            recognizeStream.on('error', function(event) {

                onEvent('Error:', event);
                reject()
            });
            recognizeStream.on('close', async function(event) {

                onEvent('Close:', event); 
                await moveToDiscovery(fileName)
                resolve()
            });
            recognizeStream.on('speaker_labels', function(event) {});
            
            // Displays events on the console.
            function onEvent(name, event) {
                console.log(name, JSON.stringify(event, null, 2));
            };
        })
    }

    function moveToDiscovery(audio) {

        return new Promise((resolve, reject) => {
            
            fs.readFile(`texts/${audio}.json`, 'utf-8', (err, data) => {

                if (err) return

                console.log(data)

                let document_obj = {
                    environment_id: '82e4652e-e050-445a-8576-e8b09642e6e2',
                    collection_id: '3af14411-288c-45d8-bffb-bdf3705cd3eb',
                    file: {"data": data }
                };

                discovery.addJsonDocument(document_obj, async (error, dat) => {

                    if (error) {
    
                        console.log(error)
                        reject('DEU ERRO', error)
                        return
                    }
                    console.log(JSON.stringify(dat, null, 2));

                    await moveToOS(dat.document_id, audio)
                    resolve()
                });
            });
        })
    }

    function moveToOS(audioId, audioName) {

        return new Promise((resolve, reject) => {

            client.createContainer({
                name: 'file'
            }, (err, container) => {
                if (err) {
                    reject(err);
                    return
                }
                else {
                    let myFile = fs.createReadStream(path.join(__dirname, `../audios/` + audioName + '.mp3'));
                    let upload = client.upload({      
                        container: container.name,
                        remote: audioId + '.mp3'
                    });
                    upload.on('error', function (err) {
                        console.log(err);
                    });
                    upload.on('success', function (fil) {
                        console.log('success to Upload');
                    });
                    myFile.pipe(upload);
                }
                resolve()
            });
        })
    }
}

module.exports = () => {

    return new ApisWatsonController()
}