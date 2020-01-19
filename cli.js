var shell = require('shelljs')
 
if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git')
    shell.exit(1)
}

if (!shell.which('npm')) {
    shell.echo('Sorry, this script requires npm')
    shell.exit(1)
}

// Run external tool synchronously
if (shell.exec('git clone https://github.com/tguelcan/restbest.git').code !== 0) {
    shell.echo('Error :(')
    shell.exit(1)
} else {
    if (shell.which('yarn')) {
        shell.echo('Install Packages')
        shell.exec('cd restbest && yarn')
    } else {
        shell.echo('Install Packages')
        shell.exec('cd restbest && npm install')
    }
}
