import React from 'react';


class Share extends React.Component {
   constructor(props) {
     super()
     this.state = {
       
     }
   }
   //onClick() {
    // window.open('fb-messenger://share?link=' + encodeURIComponent(link) + '&app_id=' + encodeURIComponent(app_id));
   //}

  render() {
    return(
      <div>
      <button href="fb-messenger://share/?"link= "https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fsharing%2Freference%2Fsend-dialog&app_id=123456789">Send In Messenger</button>
      </div>
    )
  }
}

export default Share;
