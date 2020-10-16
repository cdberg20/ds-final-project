var app = new Vue({
  el: '#member',
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
    }]
    // newmemberForm: {},
    // editMemberForm: {},
    // newCertificationForm: {},
    // certRecordList: []
    //TODO add edit member and new certification
  }

  methods: {

    fetchMember(){
      fetch('api/members/index.php')
      .then(response => response.json())
      .then(json => {
        this.member=json;
        console.log(this.member);
      });
    }
  }



//     newMemberData() {
//       return {
//         memberID:'',
//         first_name:'',
//     	  last_name:'',
//     	  street:'',
//     	  city:'',
//     	  zip:'',
//     	  date_of_birth:'',
//     	  start_date:'',
//     	  is_active:'',
//     	  gender:'',
//     	  position:'',
//     	  radio_number:'',
//     	  station_num:'',
//       }
//     },
//     dateSince(d) {
//       // Uses Luxon date API (see comment in index.html file)
//       return moment.utc(d).calendar();
//     },
//     age(d) {
//       return moment().diff(moment(d), 'years');
//     },
//     /**
//      * Given a priority, returns triage class
//      * or "" if not found
//      **/
//
//     handleNewMemberForm( evt ) {
//       // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
//
//       // TODO: Validate the data!
//
//       fetch('?', {
//         method:'POST',
//         body: JSON.stringify(this.newmemberForm),
//         headers: {
//           "Content-Type": "application/json; charset=utf-8"
//         }
//       })
//       .then( response => response.json() )
//       .then( json => {
//         console.log("Returned from post:", json);
//         // TODO: test a result was returned!
//         this.memberList.push(json[0]);
//       });
//
//       console.log("Creating (POSTing)...!");
//       console.log(this.newmemberForm);
//
//       this.newmemberForm = this.newMemberData();
//     }
//   },
//   created() {
//     fetch("api/records/")
//     .then( response => response.json() )
//     .then( json => {
//       this.memberList = json;
//
//       console.log(json)}
//     )
//
//     this.newmemberForm = this.newMemberData();
//   },
//
//   //for creating a new certification instance
//   newCertificationData() {
//     return {
//       cert_recordID:'',
//       memberID:'',
//       certID:'',
//       expiration:'',
//     }
//   },
//   dateSince(d) {
//     // Uses Luxon date API
//     return moment.utc(d).calendar();
//   },
//   age(d) {
//     return moment().diff(moment(d), 'years');
//   },
//   /**
//    * Given a priority, returns triage class
//    * or "" if not found
//    **/
//
//   handleNewCertificationForm( evt ) {
//     // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
//
//     // TODO: Validate the data!
//
//     fetch('?', {
//       method:'POST',
//       body: JSON.stringify(this.newCertificationForm),
//       headers: {
//         "Content-Type": "application/json; charset=utf-8"
//       }
//     })
//     .then( response => response.json() )
//     .then( json => {
//       console.log("Returned from post:", json);
//       // TODO: test a result was returned!
//       this.certRecordList.push(json[0]);
//     });
//
//     console.log("Creating (POSTing)...!");
//     console.log(this.newCertificationForm);
//
//     this.newCertificationForm = this.newCertificationData();
//   }
// },
// created() {
//   fetch("api/records/")
//   .then( response => response.json() )
//   .then( json => {
//     this.certRecordList = json;
//
//     console.log(json)}
//   )
//
//   this.newCertificationForm = this.newCertificationData();
// }
//
// //editing existing member data
// //TODO: js to handle editing an existing entry
// })
