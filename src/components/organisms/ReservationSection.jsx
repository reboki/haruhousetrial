import React, { useState } from "react";
import styled from "styled-components";

// styled-components の定義
const Form = styled.form`
  /* あなた好みのスタイル */
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

// サンクスメッセージ用の styled-components
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
  // 送信済みフラグ
  const [submitted, setSubmitted] = useState(false);

  // フォーム送信時の処理
  const handleSubmit = async (e) => {
    e.preventDefault(); // ページリロードを止める
    const form = e.target;

    // FormData を URL エンコード形式に変換
    const body = new URLSearchParams(new FormData(form)).toString();

    try {
      // ルート path へ POST
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      // 成功したらフラグを立てる
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("送信に失敗しました…再度お試しください。");
    }
  };

  // 送信後はメッセージを返す
  if (submitted) {
    return (
      <ThanksMessage>
        <h2>お問い合わせありがとうございました！</h2>
        <p>追ってご連絡いたします😊</p>
      </ThanksMessage>
    );
  }

  // 通常のフォーム
  return (
    <Form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Netlify用 hidden */}
      <input type="hidden" name="form-name" value="contact" />
      {/* スパムbot用ダミー */}
      <Field style={{ display: "none" }}>
        <span>Don’t fill this out if you’re human:</span>
        <Input name="bot-field" />
      </Field>

      {/* 以下、通常フィールド */}
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

      {/* Netlify reCAPTCHA */}
      <div data-netlify-recaptcha="true"></div>

      <Button type="submit">送信する</Button>
    </Form>
  );
};
