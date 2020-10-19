var app = new Vue({
  el: '#addMemberApp',
//initialize
  data: {
    memberList: [{
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
      phone:''
    }],
    newmemberForm: {
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
      phone:''
    },
    // editMemberForm: {},
    // newCertificationForm: {},
    // certRecordList: []
    //TODO add edit member and new certification
  },

  methods: {

    addNewMember(){
      fetch('api/members/post.php', {
       method:'POST',
       body: JSON.stringify(this.newmemberForm),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json() )
     .then( json => {
       console.log("Returned from post:", json);
       // TODO: test a result was returned!
       this.memberList.push(json[0]);
       this.newmemberForm = this.newMemberData();
     });

     console.log("Creating (POSTing)...!");
     console.log(this.newmemberForm);
   },
   handleNewMemberForm( evt ) {
     console.log("Member form submitted!");
     console.log(this.newmemberForm);
   },
   newMemberData() {
     return {
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
       phone:''
     }
   }
  }
    // created() {
    //   this.addNewMember();
    //   this.handleNewMemberForm();
    // },
})
