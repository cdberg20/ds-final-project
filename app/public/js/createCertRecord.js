var app = new Vue({
  el: '#addCertificationsApp',
//initialize
  data: {
    certList: [{
      cert_recordID: '',
      memberID: '',
      certID:'',
      expiration:'',
    }],
    newCertForm: {
      memberID: '',
      certID:'',
      expiration:'',
    }
  },

  methods: {

    addNewCertRecord(){
      fetch('api/certrecords/post.php', {
       method:'POST',
       body: JSON.stringify(this.newCertForm),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json() )
     .then( json => {
       console.log("Returned from post:", json);
       // TODO: test a result was returned!
       this.certList.push(json[0]);
       this.newCertForm = this.newCertData();
     });

     console.log("Creating (POSTing)...!");
     console.log(this.newCertForm);
   },
   handleNewCertForm( evt ) {
     console.log("Certification Record form submitted!");
     console.log(this.newCertForm);
   },
   newCertData() {
     return {
       memberID: '',
       certID:'',
       expiration:'',
     }
   }
  }
    // created() {
    //   this.addNewMember();
    //   this.handleNewMemberForm();
    // },
  })
