import React from 'react'
import { FloatButton } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Box } from '@chakra-ui/react'

const ChatBot = () => {
  return (
    <Box>
        <FloatButton
      icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 40 42" >
      <path d="M32.2277 7.87381H20.1012V1.62682C20.1012 1.33445 19.985 1.05404 19.7783 0.847302C19.5716 0.640561 19.2912 0.524414 18.9988 0.524414C18.7064 0.524414 18.426 0.640561 18.2193 0.847302C18.0125 1.05404 17.8964 1.33445 17.8964 1.62682V7.87381H5.76986C4.30797 7.87381 2.90596 8.45454 1.87225 9.48825C0.838544 10.522 0.257813 11.924 0.257812 13.3859V33.9642C0.257813 35.4261 0.838544 36.8281 1.87225 37.8618C2.90596 38.8955 4.30797 39.4762 5.76986 39.4762H32.2277C33.6896 39.4762 35.0916 38.8955 36.1253 37.8618C37.159 36.8281 37.7397 35.4261 37.7397 33.9642V13.3859C37.7397 11.924 37.159 10.522 36.1253 9.48825C35.0916 8.45454 33.6896 7.87381 32.2277 7.87381ZM35.5349 33.9642C35.5349 34.8413 35.1865 35.6825 34.5663 36.3027C33.946 36.923 33.1048 37.2714 32.2277 37.2714H5.76986C4.89273 37.2714 4.05152 36.923 3.4313 36.3027C2.81107 35.6825 2.46263 34.8413 2.46263 33.9642V13.3859C2.46263 12.5087 2.81107 11.6675 3.4313 11.0473C4.05152 10.4271 4.89273 10.0786 5.76986 10.0786H32.2277C33.1048 10.0786 33.946 10.4271 34.5663 11.0473C35.1865 11.6675 35.5349 12.5087 35.5349 13.3859V33.9642ZM9.07709 18.5304C9.07709 18.167 9.18485 17.8118 9.38674 17.5097C9.58863 17.2075 9.87558 16.972 10.2113 16.833C10.547 16.6939 10.9165 16.6575 11.2729 16.7284C11.6293 16.7993 11.9567 16.9743 12.2136 17.2312C12.4706 17.4882 12.6456 17.8156 12.7165 18.172C12.7874 18.5284 12.751 18.8978 12.6119 19.2336C12.4729 19.5693 12.2374 19.8562 11.9352 20.0581C11.6331 20.26 11.2778 20.3678 10.9144 20.3678C10.4271 20.3678 9.95981 20.1742 9.61524 19.8296C9.27067 19.4851 9.07709 19.0177 9.07709 18.5304ZM25.2458 18.5304C25.2458 18.167 25.3535 17.8118 25.5554 17.5097C25.7573 17.2075 26.0443 16.972 26.38 16.833C26.7157 16.6939 27.0852 16.6575 27.4416 16.7284C27.798 16.7993 28.1254 16.9743 28.3823 17.2312C28.6393 17.4882 28.8143 17.8156 28.8852 18.172C28.9561 18.5284 28.9197 18.8978 28.7806 19.2336C28.6415 19.5693 28.406 19.8562 28.1039 20.0581C27.8017 20.26 27.4465 20.3678 27.0831 20.3678C26.5958 20.3678 26.1285 20.1742 25.7839 19.8296C25.4393 19.4851 25.2458 19.0177 25.2458 18.5304ZM25.6132 24.0425H12.3843C11.1174 24.0425 9.90228 24.5458 9.00639 25.4417C8.11051 26.3376 7.60721 27.5526 7.60721 28.8196C7.60721 30.0866 8.11051 31.3016 9.00639 32.1975C9.90228 33.0934 11.1174 33.5967 12.3843 33.5967H25.6132C26.8802 33.5967 28.0953 33.0934 28.9912 32.1975C29.887 31.3016 30.3903 30.0866 30.3903 28.8196C30.3903 27.5526 29.887 26.3376 28.9912 25.4417C28.0953 24.5458 26.8802 24.0425 25.6132 24.0425ZM21.5711 26.2473V31.3919H16.4265V26.2473H21.5711ZM9.81203 28.8196C9.81203 28.1374 10.083 27.4831 10.5654 27.0007C11.0478 26.5183 11.7021 26.2473 12.3843 26.2473H14.2217V31.3919H12.3843C11.7021 31.3919 11.0478 31.1209 10.5654 30.6385C10.083 30.1561 9.81203 29.5018 9.81203 28.8196ZM25.6132 31.3919H23.7759V26.2473H25.6132C26.2954 26.2473 26.9497 26.5183 27.4321 27.0007C27.9145 27.4831 28.1855 28.1374 28.1855 28.8196C28.1855 29.5018 27.9145 30.1561 27.4321 30.6385C26.9497 31.1209 26.2954 31.3919 25.6132 31.3919Z" fill="white"/>
      </svg>}
      type="primary"
      style={{
        right: 24,
        width: 60,
        height: 60,
      }}
    />
    </Box>
  )
}

export default ChatBot