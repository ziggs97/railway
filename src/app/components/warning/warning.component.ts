import { Component, Input, OnInit } from '@angular/core';
import { Firestore, doc, deleteDoc, DocumentReference, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
})
export class WarningComponent  implements OnInit {

  @Input() validRamp:boolean =false;
  @Input() edit:boolean =false;

  @Input() docId: string = "";
  @Input() documentRef: DocumentReference<unknown> | null = null;

  @Input() title:string="Warning notification";
  @Input() country:string = "";
  @Input() neighborhood:string = "";
  @Input() city:string = "";
  @Input() address:string = "";

  // private documentRef: DocumentReference<unknown> | null = null;

  constructor(private firestore: Firestore) { }

  ngOnInit() {
    if (this.docId) {
      this.documentRef = doc(this.firestore, 'warnings', this.docId); // Initialize the document reference
    }
  }
  

  async deleteWarning() {
    if (!this.documentRef) {
      console.error("Document reference is not available.");
      return;
    }

    try {
      await deleteDoc(this.documentRef);
      console.log('Warning deleted:', this.title);
    } catch (error) {
      console.error('Error deleting warning:', error);
    }
  }

  // setDocumentRef(documentRef: DocumentReference<unknown>) {
  //   this.documentRef = documentRef;
  // }

  // async deleteWarning() {
  //   try {
  //     if (this.docId) {
  //       // Remove the warning document from the Firestore collection using the document ID
  //       const warningDocRef = doc(this.firestore, 'warnings', this.docId);
  //       await deleteDoc(warningDocRef);
  //       console.log('Warning deleted:', this.docId);
  //     } else {
  //       console.error('Document ID is missing.');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting warning:', error);
  //   }
  // }

  // async editWarning() {
  //   try {
  //     if (this.docId) {
  //       // Update the validRamp field of the warning document
  //       const warningDocRef = doc(this.firestore, 'warnings', this.docId);
  //       await updateDoc(warningDocRef, { validRamp: !this.validRamp });
  //       console.log('Warning edited:', this.docId);
  //     } else {
  //       console.error('Document ID is missing.');
  //     }
  //   } catch (error) {
  //     console.error('Error editing warning:', error);
  //   }
  // }

  // async deleteWarning() {
  //   try {
  //     if (this.documentRef) {
  //       // Remove the warning document from the Firestore collection
  //       await deleteDoc(this.documentRef);
  //       console.log('Warning deleted:', this.docId);
  //     } else {
  //       console.error('Cannot delete warning. Document reference is null or undefined.');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting warning:', error);
  //   }
  // }
  
  async editWarning() {
    try {
      if (this.documentRef) {
        // Update the validRamp field in the warning document
        await updateDoc(this.documentRef, {
          validRamp: !this.validRamp
        });
        console.log('Warning edited:', this.docId);
      } else {
        console.error('Cannot edit warning. Document reference is null or undefined.');
      }
    } catch (error) {
      console.error('Error editing warning:', error);
    }
  }


}
