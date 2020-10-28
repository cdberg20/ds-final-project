
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
   for(edit in editmemberList){
   if(edit.memberID == this.selectedMember.memberID){
     this.selectedMember = edit;
     document.getElementById('editMemberFirstName').value = selectedMember.firstName;
   // selectedMember.last_name=editmemberList.last_name;
   // selectedMember.street=editmemberList.street;
   // selectedMember.zip=editmemberList.zip;
   // selectedMember.date_of_birth=editmemberList.date_of_birth;
   // selectedMember.start_date=editmemberList.start_date;
   // selectedMember.is_active=editmemberList.is_active;
   // selectedMember.gender=editmemberList.gender;
   // selectedMember.position=editmemberList.position;
   // selectedMember.radio_number=editmemberList.radio_number;
   // selectedMember.station_num=editmemberList.station_num;
   // selectedMember.phone=editmemberList.phone;
 }
}},


},
created() {
    this.fetchAllMembers();
 //   this.handleNewMemberForm();
},
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
