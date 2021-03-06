import fs from 'fs';
import nconf from 'nconf';

nconf
    .argv() // Command-line arguments
    .env() // Environment variables
    .file({ file: 'path/to/config.json' }) // From fils 