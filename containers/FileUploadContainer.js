/**
 * Created by S.Aliakbari on 6/28/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import FileUpload from '../components/FileUpload';
import {addImage,removeImage} from '../actions/imageActions';
class FileUploadContainer extends React.Component {
    removeImageFromStore(e) {
        this.props.removeImage(parseInt(e.target.id));
    }
    render() {
        let imagesContainer = [];
        this.props.images.map((item, index) => {
            imagesContainer.push(
                <div key={`uploaded-${index}`} className={`uploaded-image-container`}>
                    <img key={`uploaded-img-${index}`} src={item}/>
                    <span id={index} className={`remove-image`} onClick={this.removeImageFromStore.bind(this)}>X</span>
                </div>
            );
        });
        return (
            <div className={`hm-image-upload-section`}>
                <div className={`image-upload-container`}>
                    <div className={`uploaded-images`}>
                        {
                            imagesContainer
                        }
                    </div>

                </div>
                <div className={`image-upload-btn-container`}>
                    <FileUpload addImage={this.props.addImage}/>
                </div>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        images: state.images,
    }
};
const mapDispatchToProps = dispatch =>{
  return{
      addImage(item){
          dispatch(addImage(item))
      },
      removeImage(index){
          dispatch(removeImage(index))
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(FileUploadContainer)