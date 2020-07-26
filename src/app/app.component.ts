import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './controller/service/file-upload.service';
import { FileUpload } from './controller/model/file-upload.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private uploadService : FileUploadService,private httpClient: HttpClient){}
  ngOnInit(): void {  
  }
  public get $fileUpload(): FileUpload {
		return this.uploadService.$fileUpload;
	}
	public get $fileUploads(): Array<FileUpload> {
		return this.uploadService.$fileUploads;
  }
    selectedFile: File;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
    imageName: any;
    //Gets called when the user selects an image
    public onFileChanged(event) {
      //Select File
      this.selectedFile = event.target.files[0];
    }
    //Gets called when the user clicks on submit to upload the image
    onUpload() {
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
     if(!this.selectedFile){
       console.log("Veuillez choisir un fichier , puis cliquez sur button UPLOAD ");
     }else{
      console.log("succes upload");
      console.log("File : "+this.selectedFile);
const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name.split(".").shift());
      //Make a call to the Spring Boot Application to save the image
      this.httpClient.post('http://localhost:8081/gestionDesEmployee-Api/TypeDocument/upload', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
        }
        );
     }
    }
      //Gets called when the user clicks on retieve image button to get the image from back end
      getImage() {
      //Make a call to Sprinf Boot to get the Image Bytes.
      this.httpClient.get('http://localhost:8081/gestionDesEmployee-Api/TypeDocument/get/' + this.imageName)
        .subscribe(
          res => {
            // console.log("data : ->"+ res.byteLength);
            this.retrieveResonse =  res;
            this.base64Data = this.retrieveResonse.data;
            this.retrievedImage = 'data:'+this.retrieveResonse.contentType+';base64,' + this.base64Data;
            // var file = new Blob([this.retrieveResonse.data], {type: this.retrieveResonse.contentType});
            // var fileURL = URL.createObjectURL(file);
            // window.open(fileURL);
          }
        );
    }
}
