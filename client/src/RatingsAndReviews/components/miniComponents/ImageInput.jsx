import React from 'react';

export default function ImageInput ({photoURLs, setPhotoURLs}){

  if (photoURLs.length < 5) {
    return (
      <>
      <input type="file" onChange={(e)=>{setPhotoURLs([...photoURLs, e.target.files[0]])}}></input>
      <ImageList images={photoURLs}/>
      </>
    );
  } else {
    return (
      <ImageList images={photoURLs}/>
    );
  }
};



var ImageList = ({images})=>{

  if (images.length > 0) {

    return (
      <div className='Review ImagesList'>
        <h3>Your Images:</h3>
        <Image image={images[0]}/>
        <Image image={images[1]}/>
        <Image image={images[2]}/>
        <Image image={images[3]}/>
        <Image image={images[4]}/>

      </div>
    );
  }
};


var Image = ({image})=>{
  if (image) {
    return (
      <img className='Review Image' src={URL.createObjectURL(image)}></img>
    )
  }
};