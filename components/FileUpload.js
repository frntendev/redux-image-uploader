/**
 * Created by S.Aliakbari on 6/28/2017.
 */
import React from 'react';

export default class FileUpload extends React.Component{
    constructor(props){
        super(props);
        this.options = this.props;
    }
    onChange(e) {
        let props = this.options;
        let label = e.target.nextElementSibling;
        var FR = new FileReader();
        FR.readAsDataURL(e.target.files[0])
        FR.addEventListener("load", function (e) {
            props.addImage(e.target.result);
        });
    }

    render() {
        return (
            <div className={`file-upload-container`}>
                <input onChange={this.onChange.bind(this)} type="file" name="file" id="file" className={`inputfile`} />
                <label htmlFor="file"><span>Choose a photo</span></label>
            </div>
        )
    }
}