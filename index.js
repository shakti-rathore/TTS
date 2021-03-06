// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

//this is second commit 
//test commit 

//this is 3rd commit

// Import other required libraries
const fs = require('fs');
const util = require('util');
// Creates a client
const client = new textToSpeech.TextToSpeechClient();
async function quickStart() {
  // The text to synthesize
  const text = 'Goodbye. Thank you for trying out the Dialeronline. You love it, right?Goodbye.   Thank you for trying out the Dialeronline. You love it, right?';

  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    // select the type of audio encoding
    audioConfig: {audioEncoding: 'LINEAR16'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.wav', response.audioContent, 'binary');
  console.log('Audio content written to file: output.wav');
}
quickStart();