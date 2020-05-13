import axios from 'axios';

export const reimbursmentClient = axios.create({
    baseURL: 'http://scottythomsp1-env.eba-s3wy3xp3.us-east-2.elasticbeanstalk.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});