var app = new Vue({
  el: '#displayExpiredCertApp',
//initialize
  data: {
    expiredCertRecordList: [{
      cert_recordID: '',
      memberID: '',
      certID:'',
  	  expiration:'',
      first_name:'',
      last_name:'',
      name:''
    }],
    selectedCert:{
      cert_recordID: '',
      memberID: '',
      certID:'',
  	  expiration:'',
      first_name:'',
      last_name:'',
      name:''
    }
  },

  methods: {


    fetchCertRecords(){
      fetch('api/members/indexExpired.php')
      .then(response => response.json())
      .then(json => {
        this.expiredCertRecordList=json;
        console.log(this.expiredCertRecordList);

      });

    }


  },
    created() {
      this.fetchCertRecords();

    },
})
