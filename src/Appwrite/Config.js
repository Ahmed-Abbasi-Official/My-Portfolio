import { Client, Storage, ID,Databases } from "appwrite";
import Conf from "../Conf/Conf";

class AppwriteService {
  client = new Client();
  bucket;
  databases;

  constructor() {
    this.client.setEndpoint(Conf.appwriteUrl).setProject(Conf.appprojectid);
    this.bucket = new Storage(this.client);
    this.databases=new Databases(this.client)
  }

  //   async UploadFile(file) {
  //     try {
  //       return await this.bucket.createFile(Conf.appwriteBucketid, ID.unique(), file);
  //     } catch (error) {
  //       throw error;
  //     }
  // }

  //         async getFile(){
  //           try {
  //             const fileId='667fde7f0026dfcaad4a'
  //             const fileDetails= await this.bucket.getFile(Conf.appwriteBucketid,fileId)

  //           //  console.log(fileUrl);
  //              return fileDetails
  //           } catch (error) {
  //       console.log(Conf.appprojectid);
  //         console.log(error);
  //     }
  //  }
  getFilePreview(fileId) {
    try {
      const filePreview = this.bucket.getFilePreview(
        Conf.appwriteBucketid,
        fileId
      );
      const url = filePreview.href;
      return url;
    } catch (error) {
      console.log(error);
    }
  }

  async createDocument(project){
    try {
      const x = await this.databases.createDocument(Conf.appwriteDatabaseid,Conf.appwriteCollectionid,ID.unique(),project)
      
    } catch (error) {
      console.log(error);
    }
  }

  async getDocument(id){
    try {
      const x =await this.databases.getDocument(Conf.appwriteDatabaseid,Conf.appwriteCollectionid,id)
      
      return x
    } catch (error) {
      console.log(error);
    }
  }
  async getContact(data){
    try {
      const x =await this.databases.createDocument(Conf.appwriteDatabaseid,Conf.appwriteCollectionid,ID.unique(),{
        name:data.name,
        email:data.email,
        Subject:data.Subject,
        Messages:data.message,
        Description: data.Messages || '',
        // timestamp: Date.now()
      })
      
      return x
    } catch (error) {
      console.log(error);
    }
  }
  
}

const appwriteServices = new AppwriteService();

export default appwriteServices;
