import React, { PureComponent } from 'react';
import moment from 'moment';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Upload,
  Modal,
  message,
  AutoComplete,
} from 'antd';

import { Consumer } from '../../store';
import renderAutocompleteOption from '../../utils/renderAutocompleteOption';
import UploadButton from '../../components/UploadButton';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 1;
  if (!isLt2M) {
    message.error('Image must smaller than 1MB!');
  }
  return isJPG && isLt2M;
}

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;

class CreateEventForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      date: moment(),
      location: '',
      category: '',
      img: null,
      imgPreview: '',
      imgPreviewVisible: false,
      imgLoading: false,
    };
  }

  handleInputChange = e => {
    if (e.target) {
      const data = e.target.attributes.data.value;
      this.setState({
        [data]: e.target.value,
      });
    }
  };

  handleCategoryChange = category => {
    this.setState({ category });
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  handleLocationChange = location => {
    this.setState({ location });
  };

  handleImageChange = e => {
    getBase64(e.file.originFileObj, url =>
      this.setState({
        img: url,
      })
    );
  };

  handlePreview = file => {
    this.setState({
      imgPreview: file.url || file.thumbUrl,
      imgPreviewVisible: true,
    });
  };

  handleExitPreview = () => {
    this.setState({ imgPreviewVisible: false });
  };

  handleImageRemove = () => {
    this.setState({ img: null });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const {
      name,
      description,
      date,
      location,
      imgPreview,
      imgPreviewVisible,
      img,
    } = this.state;

    return (
      <Consumer>
        {({ categories, createNewEvent, locationDataSource }) => (
          <Form
            onSubmit={e => {
              this.handleSubmit(e);
              createNewEvent(this.state);
            }}
          >
            <FormItem label="Name" required>
              <Input
                required
                autoFocus
                type="text"
                placeholder="Event's name"
                data="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </FormItem>
            <FormItem label="Description">
              <TextArea
                autosize
                type="textarea"
                placeholder="Describe event in a few words"
                data="description"
                value={description}
                onChange={this.handleInputChange}
              />
            </FormItem>
            <FormItem label="Category">
              <Select
                defaultValue="Software Development"
                placeholder="Select a category"
                onChange={this.handleCategoryChange}
              >
                {categories.map(cat => (
                  <Option value={cat} key={cat}>
                    {cat}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem label="Date">
              <DatePicker
                style={{ width: `${100}%` }}
                data="date"
                value={date}
                format={'YYYY/MM/DD'}
                onChange={this.handleDateChange}
              />
            </FormItem>
            <FormItem label="Location">
              <AutoComplete
                size="large"
                placeholder="City"
                data="location"
                value={location}
                backfill
                dataSource={locationDataSource.map(renderAutocompleteOption)}
                onChange={this.handleLocationChange}
              />
            </FormItem>
            <FormItem label="Image" className="clearfix">
              <Upload
                name="image"
                listType="picture-card"
                accept=".jpg"
                beforeUpload={beforeUpload}
                onPreview={this.handlePreview}
                onChange={this.handleImageChange}
                onRemove={this.handleImageRemove}
              >
                {img ? '' : <UploadButton />}
              </Upload>
              <Modal
                size="large"
                visible={imgPreviewVisible}
                footer={null}
                onCancel={this.handleExitPreview}
              >
                <img
                  alt="Event"
                  style={{ marginTop: '15px', width: '100%' }}
                  src={imgPreview}
                />
              </Modal>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                icon="check"
                style={{ width: `${100}%` }}
              >
                Submit
              </Button>
            </FormItem>
          </Form>
        )}
      </Consumer>
    );
  }
}

export default CreateEventForm;
