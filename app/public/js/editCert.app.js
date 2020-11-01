var app = new Vue({
  el: '#editCertApp',
//initialize
  data: {
    editCertList: [],
    selectedCertRecord: {},
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
      console.log(this.selectedCertRecord);
      fetch('api/certrecords/edit.php', {
       method:'POST',
       body: JSON.stringify(this.selectedCertRecord),
       headers: {
         "Content-Type": "application/json; charset=utf-8",
         "Accept": 'application/json; charset=utf-8'
       }
     })
      .then( response => response.json() )
      .then( json => {
        // this.editmemberList.selectedMember=this.selectedMember;
        // TODO: test a result was returned
        // this.selectedMember = this.editMemberData();
       this.editCertList=json;
      console.log(this.editCertList);


      });

      console.log("Creating (POSTing)...!");
   },
   deleteCertRecord(){
     fetch('api/certrecords/delete.php', {
      method:'POST',
      body: JSON.stringify(this.selectedCertRecord),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
      })
      .then( response => response.json() )
      .then( json => {
        // this.editmemberList.selectedMember=this.selectedMember;
        // TODO: test a result was returned
        // this.selectedMember = this.editMemberData();
       this.editCertList=json;
      console.log(this.editCertList);

      });
 }
},




created() {
    this.fetchAllMembersRecords();
}
})
