import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "McDonalds will sell you Ketchup every day",
      file_url: "URL",
      updated_at: "11/12/1960",
      image_url: "http://images.mentalfloss.com/sites/default/files/why-fancy-ketchup_5.jpg?resize=1100x740"
    },
    {
      title: "My Second Doc",
      description: "Swim? Yes, you can swim",
      file_url: "URL",
      updated_at: "12/25/2011",
      image_url: "https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider1.jpg"
    },
    {
      title: "My Third Doc",
      description: "I WILL EAT YOUR SOUL",
      file_url: "URL",
      updated_at: "12/30/8015",
      image_url: "http://i.stack.imgur.com/WCveg.jpg"
    }
  ]
}
