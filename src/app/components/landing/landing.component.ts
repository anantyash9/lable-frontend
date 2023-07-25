import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  imageAdded = false;
  artworkAdded = false;
  jsonAdded = false;
  imageSrc = '';
  artworkSrc = '';

onDrop(event: DragEvent) {
  event.preventDefault();
  console.log(event);
}
onDragOver(event: DragEvent) {
  event.preventDefault();
  console.log(event);
}
onFileSelected(event: Event) {
  this.loadAndDisplayImage(event.target);
}
onArtworkSelect(event: Event) {
  this.loadAndDisplayArtwork(event.target);
}
onJsonSelect(event: Event) {
  this.loadAndDisplayJson(event.target);
}
  loadAndDisplayJson(input: any) {
    //load json file as an object
    const files = input.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      // read the file as text
      reader.readAsText(file);
      reader.onload = () => {
        this.jsonAdded = true;
        // load as a json object
        const json = JSON.parse(reader.result as string);
        console.log(json);
      };
    }
  }
loadAndDisplayImage(input: any) {
  // retrieve uploaded file
  const files = input.files;
  if (files.length) {
    const file = files[0];
    const reader = new FileReader();
    // convert to base64 string
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageAdded = true;
      // display image
      this.imageSrc=reader.result as string
    };
  }
}
loadAndDisplayArtwork(input: any) {
  // retrieve uploaded file
  const files = input.files;
  if (files.length) {
    const file = files[0];
    const reader = new FileReader();
    // convert to base64 string
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.artworkAdded = true;
      // display image
      this.artworkSrc=reader.result as string
    };
  }
}
}
