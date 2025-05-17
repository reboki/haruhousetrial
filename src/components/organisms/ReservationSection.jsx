// src/components/ReservationSection.jsx
import React, { useState } from "react";
import styled from "styled-components";

// styled-components定義
const Form = styled.form`
  /* お好みのスタイル */
`;
const Field = styled.label`
  display: block;
  margin-bottom: 1rem;
  span {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
`;
const ThanksMessage = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  background: #f0fdf4;
  border: 1px solid #a7f3d0;
  border-radius: 8px;
  h2 {
    margin-bottom: 1rem;
    color: #065f46;
  }
  p {
    color: #065f46;
  }
`;

export const ReservationSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Sheets 用の POST ボディ
    const sheetBody = new URLSearchParams({
      ...Object.fromEntries(formData),
      secret: process.env.REACT_APP_FORM_SECRET,
    }).toString();

    try {
      // Google Sheets（Apps Script）へ送信
      await fetch(process.env.REACT_APP_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: sheetBody,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("送信に失敗しました…再度お試しください。");
    }
  };

  if (submitted) {
    return (
      <ThanksMessage>
        <h2>お問い合わせありがとうございました！</h2>
        <p>追ってご連絡いたします😊</p>
      </ThanksMessage>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* Apps Script 用のシークレット */}
      <input
        type="hidden"
        name="secret"
        value={process.env.REACT_APP_FORM_SECRET}
      />

      <Field>
        <span>お名前</span>
        <Input type="text" name="name" required placeholder="はるき" />
      </Field>
      <Field>
        <span>メールアドレス</span>
        <Input
          type="email"
          name="email"
          required
          placeholder="example@mail.com"
        />
      </Field>
      <Field>
        <span>お問い合わせ内容</span>
        <Textarea name="message" required placeholder="メッセージをどうぞ…" />
      </Field>

      <Button type="submit">送信する</Button>
    </Form>
  );
};
