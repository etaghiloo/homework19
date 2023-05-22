import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieList from './Components/movieList';
import FilimoBox from './Components/FilimoBox';
import {popular01} from './dataPopular';
import {popular02} from './dataPopular';
import {popular03} from './dataPopular';
import {filimoBox01} from './dataFilimoBox';
import {filimoBox02} from './dataFilimoBox';
import {filimoBox03} from './dataFilimoBox';
import './styleGlobal.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MovieList data={popular01} title="محبوب‌ترین‌های فیلیمو .یک" />
    <MovieList data={popular02} title="محبوب‌ترین‌های فیلیمو .دو" />
    <MovieList data={popular03} title="محبوب‌ترین‌های فیلیمو .سه" />
    <FilimoBox data={filimoBox01} title="فیلیمو باکس چیست؟" description="برای تماشای فیلیمو، تلویزیون شما باید هوشمند باشد، اگر نیست، با تهیه یک اندروید باکس، تلویزیون خود را هوشمند کنید، ما به شما فیلیمو باکس را پیشنهاد می‌کنیم که به تلویزیون وصل می‌شود و آن را هوشمند می‌کند. چطوری؟ کافیست ویدیو‌های زیر را تماشا‌کنید." />
    <FilimoBox data={filimoBox02} title="تلویزیون ما سیستم عامل اندروید دارد." description="اگر روی تلویزیون شما امکان نصب‌ برنامه وجود دارد، کافیست، برنامه Filimo را از گوگل‌پلی جستجو و روی تلویزیون خود نصب کنید. روش نصب برنامه فیلیمو را در ویدیوی مربوط به آن کامل توضیح دادیم." />
    <FilimoBox data={filimoBox03} title="دیدن صفحه گوشی روی تلویزیون(کست‌کردن با گوشی)" description="اگر بخواهید فیلمی که در صفحه گوشی می‌بینید روی صفحه تلویزیون هم ببینید،کافیست، علامت کست را فقط در سایت نه در اپلیکیشن، موقع پخش فیلم، گوشه تصویر پیدا کنید و روی آن بزنید، برای جزییات کامل‌تر ویدیوی“کست کردن” را تماشا کنید." />
    </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
