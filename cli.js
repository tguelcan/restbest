var exec = require('child_process').exec; 

// Copy files
function execute(command, callback) {
    console.log('Download restbest');
    exec('git clone https://github.com/tguelcan/restbest.git', function(error, stdout, stderr) { 
        exec('cd restbest && mv .env.example .env')
        if(!error) {
            console.log('Install packages');
            exec('cd restbest && npm install', function(error, stdout, stderr) { 
            console.log(stdout);
                if(!error) {
                   console.log('Done!');
                }
            });
        }
    });
};

execute()
