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
} from 'antd';

import { Consumer } from '../Store';
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
      organization: '',
      category: '',
      imgPreview: '',
      imgPreviewVisible: false,
      imgLoading: false,
      img: null,
    };
  }

  handleInputChange = e => {
    if (e.target) {
      const data = e.target.attributes.data.value;
      this.setState({ [data]: e.target.value });
    }
  };

  handleCategoryChange = category => {
    this.setState({ category });
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  handleImageChange = e => {
    if (e.file.status === 'uploading') {
      this.setState({
        imgLoading: true,
        img: {
          status: e.file.status,
        },
      });
      return;
    }
    if (e.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(e.file.originFileObj, url =>
        this.setState({
          imgLoading: false,
          img: {
            url,
            status: e.file.status,
          },
        })
      );
    }
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
      <Form onSubmit={this.handleSubmit} hideRequiredMark>
        <FormItem label="Name" required>
          <Input
            autoFocus
            type="text"
            placeholder="Event's name"
            data="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem label="Description" required>
          <TextArea
            autosize
            type="textarea"
            placeholder="Describe event in a few words"
            data="description"
            value={description}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem label="Category" required>
          <Consumer>
            {({ categories }) => (
              <Select
                placeholder="Select a category"
                onChange={this.handleCategoryChange}
              >
                {categories.map(cat => (
                  <Option value={cat} key={cat}>
                    {cat}
                  </Option>
                ))}
              </Select>
            )}
          </Consumer>
        </FormItem>
        <FormItem label="Date" required>
          <DatePicker
            style={{ width: `${100}%` }}
            data="date"
            value={date}
            format={'YYYY/MM/DD'}
            onChange={this.handleDateChange}
          />
        </FormItem>
        <FormItem label="Location" required>
          <Input
            type="text"
            placeholder="Location of event"
            data="location"
            value={location}
            onChange={this.handleInputChange}
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
    );
  }
}

export default CreateEventForm;
