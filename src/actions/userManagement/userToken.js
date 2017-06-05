import axios from 'axios';
import { FW_ROOT_URL } from '../serviceConstants';

export const RESET_TOKEN = 'RESET_TOKEN';

export function resetToken() {//used for logout
    return {
        type: RESET_TOKEN
    };
}


