import React from "react";
import axios from "axios";

class ProfileAll extends React.Component {
  state = {
    profileAllData: []
  };

  fetchProfileAllData = () => {
    var encodeURI = window.encodeURI(this.props.uri);
    return axios.get(encodeURI).then(response => {
      this.setState(() => {
        return {
          profileAllData: response.data
        };
      });
    });
  };

  componentDidMount() {
    this.fetchProfileAllData();
  }

  render() {
    if (this.state.profileAllData.length === 0) {
      return <div>Failed to fetch files from server.</div>;
    }

    const profileAll = this.state.profileAllData.map(prfl => (
      <div key={prfl._id}>
        <em>
          {prfl.nameFirst} {prfl.nameLast}
        </em>
      </div>
    ));

    return <div>{profileAll}</div>;
  }
}

export default ProfileAll;
