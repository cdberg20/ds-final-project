
var app = new Vue({
  el: '#editMemberApp',
//initialize
  data: {
    editmemberList: [{
      memberID:'',
      first_name:'',
  	  last_name:'',
  	  street:'',
  	  city:'',
  	  zip:'',
  	  date_of_birth:'',
  	  start_date:'',
  	  is_active:'',
  	  gender:'',
  	  position:'',
  	  radio_number:'',
  	  station_num:'',
      phone:'',
      email:''
    }],
    selectedMember: {
      memberID:'',
      first_name:'',
  	  last_name:'',
  	  street:'',
  	  city:'',
  	  zip:'',
  	  date_of_birth:'',
  	  start_date:'',
  	  is_active:'',
  	  gender:'',
  	  position:'',
  	  radio_number:'',
  	  station_num:'',
      phone:'',
      email:''
    },
    // editMemberForm: {},
    // newCertificationForm: {},
    // certRecordList: []
    //TODO add edit member and new certification
  },

  methods: {

    fetchAllMembers(){
      fetch('api/members/index.php')
      .then(response => response.json())
      .then(json => {
        this.editmemberList=json;

        console.log(this.editmemberList);
      });
    },

    updateMember(){
      fetch('api/members/edit.php', {
       method:'POST',
       body: JSON.stringify(this.selectedMember),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.editmemberList.push(json[0]);
        this.selectedMember = this.editMemberData();
      });
     //
      console.log("Creating (POSTing)...!");
      console.log(this.selectedMember);
   },





   editMemberData() {
     return {
       memberID:'',
       first_name:'',
       last_name:'',
       street:'',
       city:'',
       zip:'',
       date_of_birth:'',
       start_date:'',
       is_active:'',
       gender:'',
       position:'',
       radio_number:'',
       station_num:'',
       phone:'',
       email:''
     }
   },
   displayMember(){
   for(member in editmemberList){
   if(member.memberID == this.selectedMember.memberID){
   this.selectedMember = member;
 }
}},

   created() {
       this.fetchAllMembers();
    //   this.handleNewMemberForm();
   },
}
})

/*data  -
    selectedMember{id:''}
    members[{}]

functions -
  updateMember(){
  fetch(edit.php)
}
  created(){

  }
  fetchAllMembers(){
    GET API members (api/members)
  }
  displayMember(){
  for(member in members){
  if(member.id == this.selectedmember.id){
  this.selectedMember = member;
}
}

}

HTML -
<select>
  <option> memberId
  v-model selectedMember.id
save button
form action = updateMember()

</select>


*/
