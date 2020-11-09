import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  renderActions() {
    return (
      <div>
        <button
          onClick={() => this.onDelete()}
          className="ui secondary button "
        >
          Delete
        </button>
        <button onClick={() => history.push("/")} className="ui button ">
          Cancel
        </button>
      </div>
    );
  }
  onDelete = () => {
    console.log(this.props.stream);
    this.props.deleteStream(this.props.match.params.id);
  };
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    console.log(this.props);
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete ";
    }
    return `Are you sure you want to delete ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          history.push("/");
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
