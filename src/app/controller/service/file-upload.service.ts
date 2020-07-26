import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { FileUpload } from '../model/file-upload.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http:HttpClient) { }

    /**
     * Getter $fileUpload
     * @return {FileUpload}
     */
	public get $fileUpload(): FileUpload {
    if(this.fileUpload==null){
     this.fileUpload = new FileUpload();
     return this.fileUpload;
    }
		return this.fileUpload;
	}

    /**
     * Setter $fileUpload
     * @param {FileUpload} value
     */
	public set $fileUpload(value: FileUpload) {
		this.fileUpload = value;
	}
  private fileUpload : FileUpload;

    /**
     * Getter $fileUploads
     * @return {Array<FileUpload>}
     */
	public get $fileUploads(): Array<FileUpload> {
    if(this.fileUploads==null){
      this.fileUploads = new Array<FileUpload>();
      return this.fileUploads;
    }
		return this.fileUploads;
	}

    /**
     * Setter $fileUploads
     * @param {Array<FileUpload>} value
     */
	public set $fileUploads(value: Array<FileUpload>) {
		this.fileUploads = value;
	}
  private fileUploads : Array<FileUpload>;
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8080/savefile', data, {
    reportProgress: true,
    responseType: 'text'
    });
    return this.http.request(newRequest);
}
}
