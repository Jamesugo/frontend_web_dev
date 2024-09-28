class Database {
  getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }
  query(sql) {}
}

class Application {
    fetchAuthors(){

       const  database = Database.getInstance();
       return database.query(`select * from authors`)
    }
    
    fetchBooks(authorId){

       const  database = Database.getInstance();
       return database.query(`select * from books where author=1`)
    }
}