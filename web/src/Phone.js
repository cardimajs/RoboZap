import React from 'react'

import './Phone.css'

const Phone = ({ name, status, messages }) => {
  return (
    <div className="modal-dialog" id="DIV_1x">
      <div className="modal-content" id="DIV_2x">
        <div className="all_header_wp" id="DIV_3x">
          <div className="wp-android" id="DIV_4x">
            {/* <div className="android-header white-content" id="DIV_5">
              <div className="status-bar" id="DIV_6">
                <div className="wifi" id="DIV_7">
                  <i className="fa fa-wifi" aria-hidden="true" id="I_8" />
                </div>
                <div className="status-network" id="DIV_9">
                  <i className="fa fa-signal" aria-hidden="true" id="I_10" />
                </div>
                <div className="status-network" id="DIV_11">
                  <i className="fa fa-signal" aria-hidden="true" id="I_12" />
                </div>
                <span className="status-time" id="SPAN_13">
                  10:04 am
                </span>
                <div className="battery-container" id="DIV_14">
                  <span className="battery-status" id="SPAN_15">
                    50%
                  </span>
                  <div className="battery pull-right" id="DIV_16">
                    <div className="battery-percentage" id="DIV_17">
                      <div className="battery-level" id="DIV_18" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="wp-android-header" id="DIV_19">
              <div className="modal-header" id="DIV_20">
                <div
                  className="header-icon whatsapp-arrow-img pull-left"
                  id="DIV_21"
                >
                  <img
                    alt="back icon"
                    src="https://fakedetail.com/assets/images/telegram-back-icon.png"
                    id="IMG_22"
                  />
                </div>
                <div className="modal-title whatsapp-title" id="DIV_23">
                  <div
                    className="modal-title-img whatsapp-android-img"
                    id="DIV_24"
                  >
                    <img
                      alt="profile"
                      src="https://fakedetail.com/assets/images/profile.jpg"
                      id="IMG_25"
                    />
                  </div>
                  <span
                    className="header-content whatsapp-content-name"
                    id="SPAN_26"
                  >
                    <span className="text-name" id="SPAN_27">
                      {name}
                    </span>
                    <span className="header-title" id="SPAN_28">
                      {status}
                    </span>
                  </span>
                </div>
                <div
                  className="header-icon whatsapp-header-icon whatsapp-header-custom pull-right"
                  id="DIV_29"
                >
                  <img
                    alt="header icon"
                    src="https://fakedetail.com/assets/images/whatsapp-android-header-icon.png"
                    id="IMG_30"
                  />
                  <img
                    alt="header icon"
                    className="wp-desktop-header-icon"
                    src="https://fakedetail.com/assets/images/wp-desktop-header-icon.png"
                    id="IMG_31"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="wp-ios" id="DIV_32">
            <div className="ios-header" id="DIV_33">
              <div
                className="status-bar whatsapp-iphone-status-bar"
                id="DIV_34"
              >
                {/* <div className="iphone-moblie-network" id="DIV_35">
                  <div id="DIV_36" />
                  <div id="DIV_37" />
                  <div id="DIV_38" />
                  <div id="DIV_39" />
                  <div id="DIV_40" />
                  <span id="SPAN_41">vodafone</span>
                  <div className="wifi" id="DIV_42">
                    <i className="fa fa-wifi" aria-hidden="true" id="I_43" />
                  </div>
                </div> */}
                {/* <div className="iphone-time" id="DIV_44">
                  <span className="status-time" id="SPAN_45">
                    10:04 AM
                  </span>
                </div> */}
                <div className="battery-container" id="DIV_46">
                  <span className="battery-status" id="SPAN_47">
                    50%
                  </span>
                  <div
                    className="battery iphone-battery pull-right"
                    id="DIV_48"
                  >
                    <div
                      className="battery-percentage iphone-battery-percentage"
                      id="DIV_49"
                    >
                      <div className="battery-level" id="DIV_50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wp-ios-header" id="DIV_51">
              <div className="modal-header" id="DIV_52">
                <div className="header-icon whatsapp-ios-arrow-img" id="DIV_53">
                  <img
                    alt="iphone arrow"
                    src="https://fakedetail.com/assets/images/iphone-arrow.png"
                    id="IMG_54"
                  />
                </div>
                <div className="modal-title" id="DIV_55">
                  <div className="modal-title-img whatsapp-ios-img" id="DIV_56">
                    <img
                      alt="profile"
                      src="https://fakedetail.com/assets/images/profile.jpg"
                      id="IMG_57"
                    />
                  </div>
                  <span className="header-content" id="SPAN_58">
                    <span className="text-name" id="SPAN_59">
                      {name}
                    </span>
                    <br id="BR_60" />
                    <span className="header-title" id="SPAN_61">
                      online
                    </span>
                  </span>
                </div>
                <div className="header-icon pull-right" id="DIV_62">
                  <img
                    alt="iphone header"
                    src="https://fakedetail.com/assets/images/iphone-header-left.png"
                    id="IMG_63"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body whatsapp-body whatsapp-body-ios" id="DIV_64">
          {/* <div className="message message-received is-not remove" id="DIV_65">
            <div
              className="message-container u-table whatsapp-received"
              id="DIV_66"
            >
              <div
                className="message-message u-tableCell u-alignBottom"
                id="DIV_67"
              >
                <div
                  className="message-bubble Caret Caret-right whatsapp-caret"
                  id="DIV_68"
                >
                  <div className="whatsapp-text-img received-carat" id="DIV_69">
                    <img
                      alt="anroid whatsapp left"
                      src="https://fakedetail.com/assets/images/anroid-whatsapp-left-carat.png"
                      id="IMG_70"
                    />
                  </div>
                  <div className="message-text whatsapp-text" id="DIV_71">
                    <p id="P_72">
                      Hello there. Thanks for the follow. Did you notice, that I
                      am an egg? A talking egg? Damn!
                    </p>
                    <div className="message-read-status" id="DIV_73">
                      <span id="SPAN_74">2:40</span>
                      <span className="iphone-message-status" id="SPAN_75">
                        PM
                      </span>
                    </div>
                  </div>
                  <div
                    className="iphone-bottom"
                    style={{
                      display: 'none',
                    }}
                    id="DIV_76"
                  >
                    <img
                      src="https://fakedetail.com/assets/images/iphone-message-grey-bottom.png"
                      alt="iphone message grey bottom"
                      id="IMG_77"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="message-footer" id="DIV_78">
              <span className="message-footerItem" id="SPAN_79" />
            </div>
          </div> */}

          {messages.map((message) => (
            <div
              key={message.id}
              className="message message-sent is-not remove"
              id="DIV_81"
            >
              <div
                className="message-container u-table whatsapp-sent"
                id="DIV_82"
              >
                <div
                  className="message-message u-tableCell u-alignBottom"
                  id="DIV_83"
                >
                  <div
                    className="message-bubble Caret Caret-left whatsapp-caret"
                    id="DIV_84"
                  >
                    <div className="whatsapp-text-img sent-carat" id="DIV_85">
                      <img
                        alt="anroid whatsapp right"
                        src="https://fakedetail.com/assets/images/anroid-whatsapp-right-carat.png"
                        id="IMG_86"
                      />
                    </div>
                    <div className="message-text whatsapp-text" id="DIV_87">
                      <p id="P_88">{message.data}</p>
                      <div className="message-read-status" id="DIV_89">
                        <span id="SPAN_90">2:40</span>
                        <span className="iphone-message-status" id="SPAN_91">
                          PM
                        </span>
                        <div className="message-status" id="DIV_92">
                          <img
                            alt="check read"
                            src="https://fakedetail.com/assets/images/check-read.png"
                            id="IMG_93"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="iphone-bottom iphone-green-bottom"
                      style={{
                        display: 'none',
                      }}
                      id="DIV_94"
                    >
                      <img
                        src="https://fakedetail.com/assets/images/iphone-message-green-bottom.png"
                        alt="iphone message green bottom"
                        id="IMG_95"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-footer" id="DIV_96">
                <span className="message-footerItem" id="SPAN_97" />
              </div>
            </div>
          ))}

          {/* <div className="message message-sent is-not remove" id="DIV_81">
            <div
              className="message-container u-table whatsapp-sent"
              id="DIV_82"
            >
              <div
                className="message-message u-tableCell u-alignBottom"
                id="DIV_83"
              >
                <div
                  className="message-bubble Caret Caret-left whatsapp-caret"
                  id="DIV_84"
                >
                  <div className="whatsapp-text-img sent-carat" id="DIV_85">
                    <img
                      alt="anroid whatsapp right"
                      src="https://fakedetail.com/assets/images/anroid-whatsapp-right-carat.png"
                      id="IMG_86"
                    />
                  </div>
                  <div className="message-text whatsapp-text" id="DIV_87">
                    <p id="P_88">
                      Yeah that is crazy, but people can change their own
                      picture and build their own Twitter conversation with this
                      generator, so it does not matter that you are an egg
                    </p>
                    <div className="message-read-status" id="DIV_89">
                      <span id="SPAN_90">2:40</span>
                      <span className="iphone-message-status" id="SPAN_91">
                        PM
                      </span>
                      <div className="message-status" id="DIV_92">
                        <img
                          alt="check read"
                          src="https://fakedetail.com/assets/images/check-read.png"
                          id="IMG_93"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="iphone-bottom iphone-green-bottom"
                    style={{
                      display: 'none',
                    }}
                    id="DIV_94"
                  >
                    <img
                      src="https://fakedetail.com/assets/images/iphone-message-green-bottom.png"
                      alt="iphone message green bottom"
                      id="IMG_95"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="message-footer" id="DIV_96">
              <span className="message-footerItem" id="SPAN_97" />
            </div>
          </div> */}

          {/* <div className="message message-received is-not remove" id="DIV_99">
            <div
              className="message-container u-table whatsapp-received"
              id="DIV_100"
            >
              <div
                className="message-message u-tableCell u-alignBottom"
                id="DIV_101"
              >
                <div
                  className="message-bubble Caret Caret-right whatsapp-caret"
                  id="DIV_102"
                >
                  <div
                    className="whatsapp-text-img received-carat"
                    id="DIV_103"
                  >
                    <img
                      alt="anroid whatsapp"
                      src="https://fakedetail.com/assets/images/anroid-whatsapp-left-carat.png"
                      id="IMG_104"
                    />
                  </div>
                  <div className="message-text whatsapp-text" id="DIV_105">
                    <p id="P_106">
                      Thanks mate! Feel way better now. Oh, and guys, these
                      messages will be removed once your add your own :-)
                    </p>
                    <div className="message-read-status" id="DIV_107">
                      <span id="SPAN_108">2:40</span>
                      <span className="iphone-message-status" id="SPAN_109">
                        PM
                      </span>
                    </div>
                  </div>
                  <div
                    className="iphone-bottom"
                    style={{
                      display: 'none',
                    }}
                    id="DIV_110"
                  >
                    <img
                      src="https://fakedetail.com/assets/images/iphone-message-grey-bottom.png"
                      alt="iphone message grey bottom"
                      id="IMG_111"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="message-footer" id="DIV_112">
              <span className="message-footerItem" id="SPAN_113" />
            </div>
          </div> */}
        </div>
        <div className="all_footer_wp" id="DIV_115">
          <div className="wp-desktop-footer" id="DIV_116"></div>
          <div className="whatapp-android-footer" id="DIV_117">
            <div className="post_write_comment" id="DIV_118">
              <div className="txt" id="DIV_119">
                <div className="text_block" id="DIV_120">
                  <div className="comment" id="DIV_121">
                    <div className="img" id="DIV_122">
                      <svg
                        id="svg_123"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path
                          opacity=".45"
                          fill="#000000"
                          d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
                          id="path_124"
                        />
                      </svg>
                    </div>
                    <div className="pull-left text-wrcommenttext" id="DIV_125">
                      Type a message
                    </div>
                    <div
                      className="pull-right text-right whatsapp-comment-bar"
                      id="DIV_126"
                    >
                      <img
                        alt="whatsapp comment"
                        src="https://fakedetail.com/assets/images/whatsapp-comment-right-icon.png"
                        id="IMG_127"
                      />
                    </div>
                    <div className="whatsapp-recoder" id="DIV_128">
                      <img
                        alt="whatsapp recoder"
                        src="https://fakedetail.com/assets/images/whatsapp-recoder.png"
                        id="IMG_129"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="whatapp-ios-footer" id="DIV_130">
            <div className="iphone-chat" id="DIV_131">
              Message
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phone
