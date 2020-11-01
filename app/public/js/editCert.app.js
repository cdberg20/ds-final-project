var app = new Vue({
  el: '#editCertApp',
//initialize
  data: {
    editCertList: [],
    selectedCertRecord: null,
    selectedCertRecordID: null
  },

  methods: {

    fetchAllMembersRecords(){
      fetch('api/certrecords/memberindex.php')
      .then(response => response.json())
      .then(json => {
        this.editCertList=json;

        console.log(this.editCertList);
      });
    },

    updateCertRecord(){
      fetch('api/certrecords/edit.php', {
       method:'POST',
       body: JSON.stringify(this.selectedCertRecord),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
      .then(response => response.json() )
      .then(json => {
        console.log("Returned from post:", json);
        this.editCertList.push(json[0]);
        this.selectedCertRecord = this.editMemberData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.selectedCertRecord);
   },

   editMemberData() {
     return {
       certID:'',
       expiration:''
     }
   },
   deleteCertRecord(){
     fetch('api/certrecords/delete.php', {
      method:'POST',
      body: JSON.stringify(this.selectedCertRecordID),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
   });
 }
},



created() {
    this.fetchAllMembersRecords();
}
})
