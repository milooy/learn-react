import React from "react";
import "./VisitorForm.css";

export default class VisitorForm extends React.Component {
  state = { email: "", contents: "" };

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updateContents(e) {
    this.setState({ contents: e.target.value });
  }

  resetForm(e) {
    this.setState({ email: "", contents: "" });
  }

  render() {
    const { email, contents } = this.state;
    return (
      <>
        <h2 style={{ marginTop: 50 }}>방명록</h2>
        <form
          className="visitor-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert(`email: ${email}, contents: ${contents}`);
            this.resetForm();
          }}
        >
          <label htmlFor="email">이메일</label>
          <input
            value={email}
            onChange={this.updateEmail.bind(this)}
            type="email"
            name="email"
          />
          <label htmlFor="visitor-form-contents">내용</label>
          <textarea
            onChange={this.updateContents.bind(this)}
            name="contents"
            id="visitor-form-contents"
            value={contents}
          />
          <div>
            <button onClick={this.resetForm.bind(this)} type="reset">
              내용 삭제
            </button>
            <button type="submit">보내기</button>
          </div>
        </form>
      </>
    );
  }
}
