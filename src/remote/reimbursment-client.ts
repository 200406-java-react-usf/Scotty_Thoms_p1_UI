import axios from 'axios';

export const reimbursmentClient = axios.create({
    baseURL: 'http://scottythomsp1-env.eba-s3wy3xp3.us-east-2.elasticbeanstalk.com/',
    // baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json'
    }
});