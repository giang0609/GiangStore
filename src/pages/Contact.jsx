import React from "react";
import contactSlider from "../assets/fake-data/contact-slide";
import adressStore from "../assets/fake-data/adress-store";
import Carousel from "react-bootstrap/Carousel";
import Grid from "../components/Grid";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import background from "../assets/images/slider/slider__1.jpg";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__slide">
        <Carousel variant="dark" interval={4000} indicators={false}>
          {contactSlider.map((item, index) => (
            <Carousel.Item
              interval={1000}
              key={index}
              className="contact__slide__img"
            >
              <img className="d-block w-100" src={item.img} alt="First slide" />
              <Carousel.Caption className="contact__slide__caption">
                <div className="contact__slide__caption__item">
                  <h3>CÔNG TY TNHH CÔNG NGHỆ DI ĐỘNG GIANG TRAN</h3>
                  <p>144 Võ Thị Sáu, P.8, Q.3, TP.HCM</p>
                  <div className="contact__slide__caption__item__info">
                    {" "}
                    <span>
                      ĐT: (08) 93.56987 - 93.56987{" "}
                      <p>E-mail: giangtran6997@gmail.com</p>
                    </span>
                    <span>
                      Mã số thuế: 123456789{" "}
                      <p>Tài khoản: 123456789 - NH Á Châu (ACB), TP.HCM</p>
                    </span>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="contact__adress">
        <div className="contact__adress__title">
          <div className="title-home">
            HỆ THỐNG CỬA HÀNG GIANG TRAN LUXURY MOBILE
          </div>
          <div className="content-home">
            Hiện nay trung tâm công nghệ di động GIANG TRAN có mặt trên hầu hết
            các quận trung tâm TP. HCM, Có bãi đậu xe ô tô và xe máy rộng rãi,
            không gian trải nghiệm sang trọng.
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="contact__adress__store ">
            <Grid col="3 " mdCol="2" smCol="1" gap="20">
              {adressStore.map((item, index) => (
                <Card
                  key={index}
                  style={{ width: "25rem" }}
                  className="contact__adress__store__item"
                >
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{ height: "20rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.phoneNumber}
                    </Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Link
                      href="https://www.google.com/maps/place/Mai+Nguyen+Flagship+Store+%26+Head+Office/@10.7873042,106.68906,17z/data=!4m9!1m2!2m1!1zRmxhZ3NoaXAgU3RvcmUgLSAxNDQgVsO1IFRo4buLIFPDoXUsIFAuIFZUUywgUS4zLCBUUC5IQ00!3m5!1s0x31752f5b9c5239c1:0x33921e1e64d00c3a!8m2!3d10.7873071!4d106.6912457!15sCjhGbGFnc2hpcCBTdG9yZSAtIDE0NCBWw7UgVGjhu4sgU8OhdSwgUC4gVlRTLCBRLjMsIFRQLkhDTZIBEGNlbGxfcGhvbmVfc3RvcmU"
                      target="_blank"
                    >
                      <i class="bx bxs-map"></i> Xem bản đồ
                    </Card.Link>
                  </Card.Body>
                </Card>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <div className="contact__complete">
        <div className="contact__complete__content">
          <h3>MỌI NHU CẦU, QUÝ KHÁCH VUI LÒNG LIÊN HỆ</h3>
          <p>
            Các cửa hàng Giang Store phục vụ từ 8:00 đến 21:30 Thứ 2 đến Chủ Nhật
          </p>
          <p>
            Phản ảnh về cung cách phục vụ chưa được tốt của nhân viên Giang store :
          </p>
          <p>Quý khách vui lòng gọi trực tiếp anh Giang: 0965.318.831.</p>
          <p>Email: giangtran6997@gmail.com</p>
        </div>
        <div className="contact__complete__form">
          <div className="contact__complete__form__des">
            <h3>FORM LIÊN HỆ</h3>
            <p>
              Xin chân thành cảm ơn những ý kiến đóng góp, phản hồi từ phía
              khách hàng về thái độ, phong cách phục vụ của nhân viên chưa làm
              Quý khách hài lòng.
            </p>
          </div>
          <form id="contact-form" method="POST">
            <div>
              <label htmlFor="name"></label>
              <input name="name" type="text" placeholder="Họ và tên" />
              <label htmlFor="name"></label>
              <input name="name" type="text" placeholder="Số điện thoại" />
            </div>

            <label htmlFor="email"></label>
            <input
              name="email"
              placeholder="Enter Email ..."
              type="text"
            ></input>
            <label htmlFor="message"></label>
            <textarea
              name="message"
              rows="6"
              placeholder="Nội dung liên hệ:"
              required
            ></textarea>
            <Button>Gửi Liên hệ</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
