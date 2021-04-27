import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
function CreateLounge() { 
    const [name, setName] = useState('');
    const [Imagefile,setImagefile] = useState("");
    const [used, setUsed] = useState(false);
    const [redirect,setRedirect] = useState(false);
    let nameChange = (e) => {
        setName(e.target.value);
    }
    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} />;
      };
    let changeImage = (e) => {
        setImagefile(e.target.files[0]);
        console.log(Imagefile);
        setUsed(true);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          name: name,
          picture: Imagefile,
          is_published: true
        };
        console.log('this is the context data',data);
        let form_data = new FormData();
        form_data.append('name',name);
        form_data.append('slug',name);
        form_data.append('picture',Imagefile,Imagefile.name);
        form_data.append('is_published',true);

        // axios.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');
        axios({
        url: 'https://cloudloungebackend.herokuapp.com/api/create/lounges',
        data: form_data,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      }).then(res=> {
          console.log(res.data);
          setRedirect(true);
      }).catch(err => {console.log("this is the error", err.message)});

    }
    let RedirectPage = () => {
        if(redirect === true) {
            return <Redirect to={`/edit/${name}`} />
        }
    } 
    return (
        <div className='create'>
            <div className='container'>
    <form method='POST'>
  <div class="form-group">
    <label for="exampleInputEmail1">Name of Lounge</label>
    <input onChange={(e) => nameChange(e)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Lounge Name"/>
    <small id="emailHelp" class="form-text text-muted">Must be unique and should give info about your lounge</small>
  </div>
  <div class="custom-file">
  <label class="custom-file-label" for="inputGroupFile01">Choose Image</label>
  <input onChange={(e) => changeImage(e)}  type="file" class="custom-file-input" id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01" /> 
  </div>
  <button type="submit" onClick={(e) => handleSubmit(e)} class="btn btn-primary">Submit</button>
</form>
    </div>
    <p>Filename: {Imagefile.name}</p>
    <p>File type: {Imagefile.type}</p>
    <p>File size: {Imagefile.size} bytes</p>
    {Imagefile && <ImageThumb image={Imagefile} />}
    {RedirectPage()}
    </div>
    )
}
export default CreateLounge;
