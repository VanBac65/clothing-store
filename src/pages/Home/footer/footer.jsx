import React, { Fragment } from 'react'
import BoxInfo from './boxInfo'
import BoxInput from './boxInput'
import HotlineBox from './hotlineBox'

export default function Footer() {
    return (
        <Fragment>
            <div className='footer'>
                <div className='row d-flex mb-4'>
                    <div className='col-md-6'>
                        <div className='row d-flex'>
                            <HotlineBox title='MUA HÀNG TRỰC TUYẾN' arrPhone={['0938.803.633', '1900.633.501']} email='sales.online@totoday.vn' />
                            <HotlineBox title='HOTLINE GÓP Ý' arrPhone={['0908.18.12.89']} email='cskh@totoday.vn' />
                        </div>
                    </div>
                    <div className='col-md-6 ms-0'>
                        <div className='row d-flex'>
                            <BoxInfo title='Thông tin' arr={['Giới thiệu', 'Liên hệ', 'Đối tác', 'Tuyển dụng']} />
                            <BoxInfo title='Chính sách' arr={['Chính sách đổi hàng', 'Chính sách bảo hành', 'Chính sách bảo mật', 'Chính sách hoàn tiền']} />
                            <BoxInfo title='FAQ' arr={['Thanh toán và vận chuyển', 'Hướng dẫn chọn size', 'Kiểm tra thông tin đơn hàng', 'Câu hỏi thường gặp']} />
                        </div>
                    </div>
                </div>
                <div className='row d-flex'>
                    <BoxInput title='Đăng ký nhận khuyến mãi' placeholder='Nhập vào email của bạn' valueBtn='Gửi' />
                    <BoxInput title='Tra cứu đơn hàng của bạn' placeholder='Nhập SĐT hoặc Mã đơn hàng' valueBtn='Tìm' />
                    <div className='col-md-2 mt-5 ms-5'>
                        <a className='' href="http://">Liên hệ/ Góp ý</a>
                    </div>
                </div>
                <div><hr className='hr-footer mx-4' /></div>
                <div className='ms-4 mt-4 pb-4 fs-6'>
                    <p>CÔNG TY TNHH SXTM & DV TOTO GROUP</p>
                    <p>Địa chỉ: 4 Tân Bình, Tân Dân, Kinh Môn, Hải Dương/ Điện thoại: 0385598756/DKKD số: 41C8013053 cấp ngày 01/12/2010, nơi cấp UBND Tân Dân</p>
                </div>
            </div>
        </Fragment>
    )
}
