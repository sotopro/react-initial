import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar'
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetch('https://62ed3c1c818ab252b60d2c47.mockapi.io/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const dataProducts = await data.json();
        setProducts(dataProducts);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
    // fetch('https://62ed3c1c818ab252b60d2c47.mockapi.io/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    //   .catch(error => console.log(error));
  }, []);

  console.warn('products', products);
  return (
    <div>
     <NavBar />
     <main>
      <h3>Hello</h3>
     </main>
     {/* <main>
     <h1>Tech Bubble Blog</h1>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
        <p>Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
          She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. That is why, she explained to her date sitting across the table, that she could never have a serious relationship with him due to the fact that he was colorblind.
          The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.
          Betty decided to write a short story and she was sure it was going to be amazing.
        </p>
     </main> */}
    </div>
  );
}

export default App;
