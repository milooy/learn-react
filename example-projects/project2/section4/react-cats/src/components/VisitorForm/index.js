import React from "react";
import "./VisitorForm.css";

export default class VisitorForm extends React.Component {
  render() {
    return (
      <>
        <h2 style={{ marginTop: 50 }}>방명록</h2>
        <form
          className="visitor-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.elements.email.value);
            console.log(e.target.elements.contents.value);
          }}
        >
          <label htmlFor="email">이메일</label>
          <input type="email" name="email" />
          <label htmlFor="visitor-form-contents">내용</label>
          <textarea name="contents" id="visitor-form-contents" />
          <button>보내기</button>
        </form>
      </>
    );
  }
}
