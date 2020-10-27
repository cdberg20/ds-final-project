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
