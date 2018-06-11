import React, { PureComponent } from 'react';
import moment from 'moment';
import { Form, Input, DatePicker, Button, Icon } from 'antd';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

class CreateEventForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      date: moment(),
      location: '',
      organization: '',
      img: '',
      imgPreview: '',
      category: '',
    };
  }

  handleInputChange = e => {
    const data = e.target.attributes.data.value;
    this.setState({ [data]: e.target.value });
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  handleImageChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const img = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        img,
        imgPreview: reader.result,
      });
    };

    reader.readAsDataURL(img);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { state } = this;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="Title">
          <Input
            autoFocus
            type="text"
            placeholder="Event's title"
            data="title"
            value={state.title}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem label="Description">
          <TextArea
            autosize
            type="textarea"
            placeholder="Describe event in a few words"
            data="description"
            value={state.description}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem label="Date">
          <DatePicker
            style={{ width: `${100}%` }}
            data="date"
            value={this.state.date}
            format={'YYYY/MM/DD'}
            onChange={this.handleDateChange}
          />
        </FormItem>
        <FormItem label="Location">
          <Input
            type="text"
            placeholder="Location of event"
            data="location"
            value={state.location}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem label="Organization">
          <Input
            type="organization"
            placeholder="Organizing company name"
            data="organization"
            value={state.organization}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem label="Image">
          <Input
            type="file"
            onChange={this.handleImageChange}
            style={{ padding: 0 }}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={{ width: `${100}%` }}>
            <Icon type="check" />Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default CreateEventForm;
