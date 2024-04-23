import { Injectable } from "@nestjs/common";
import * as fs from 'fs';
import IFileService from "./interface/file.service.interface";

@Injectable()
export default class fileService implements IFileService {
    async readFileInBase64(path: string): Promise<string> {
        
        if(!this.fileExists(path)) {
            return null
        }
    
        return fs.readFileSync(path).toString('base64');
    }

    private fileExists(path: string): boolean {
        return fs.existsSync(path)
    }
}