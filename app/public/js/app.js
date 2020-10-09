var app = new Vue({
  el: '#memberPage',
  data: {
    memberList: [],
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
    newmemberForm: {}
    //TODO add edit member and new certification
  },

  methods: {
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
      }
    },
    dateSince(d) {
      // Uses Luxon date API (see comment in index.html file)
      return moment.utc(d).calendar();
    },
    age(d) {
      return moment().diff(moment(d), 'years');
    },
    /**
     * Given a priority, returns triage class
     * or "" if not found
     **/

    handleNewMemberForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('?', {
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
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newmemberForm);

      this.newmemberForm = this.newMemberData();
    }
  },
  created() {
    fetch("api/records/")
    .then( response => response.json() )
    .then( json => {
      this.memberList = json;

      console.log(json)}
    )

    this.newmemberForm = this.newMemberData();
  }
})
