var app = new Vue({
  el: '#displayCertRecordsApp',
//initialize
  data: {
    certRecordList: [{
      cert_recordID: '',
      memberID: '',
      certID:'',
  	  expiration:''
    }]
  },

  methods: {

    fetchCertRecords(){
      fetch('api/certrecords/index.php')
      .then(response => response.json())
      .then(json => {
        this.certRecordList=json;

        console.log(this.certRecordList);
      });
    }


  },
    created() {
      this.fetchCertRecords();
    },
})
