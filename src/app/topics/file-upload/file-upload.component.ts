import { Component } from '@angular/core';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  title = 'fileUpload';
  images: any;

  constructor(private node: NodeService){}

  ngOnInit(){

  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);
    this.node.uploadFileToNodeServer(formData).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => console.info('complete')
    });
  }
}
