export type Response = {
  header: ResponseHeader;
  body: {
    pageNo: PageNo;
    totalCount: TotalCount;
    items: {
      item: [Item];
    };
    numOfRows: NumOfRow;
  };
};

export type ResponseHeader = {
  resultCode: string;
  resultMsg: string;
};

export type PageNo = number;
export type TotalCount = number;
export type NumOfRow = number;

export type Item = {
  // trng_mscl_nm: string;
  // rptt_tcnt_nm: string;
  file_url: string;
  vdo_desc: string;
  // file_sz: number;
  // fps_cnt: number;
  row_num: number;
  // resolution: string;
  // tool_nm: string;
  // aggrp_nm: string;
  // frme_no: number;
  // ecrg_cycl_nm: string;
  img_file_nm: string;
  // trng_mscl_zn_nm: string;
  // fbctn_yr: string;
  // trng_plc_nm: string;
  // vdo_len: string;
  // trng_mscl_part: string;
  // lang: string;
  trng_nm: string;
  // job_ymd: string;
  // trng_mscl_class: string;
  vdo_ttl_nm: string;
  // snap_tm: number;
  // trng_hr_nm: string;
  file_type_nm: string;
  file_nm: string;
  // trng_mscl_eng_nm: string;
  img_file_url: string;
  img_file_sn: number;
  // data_type: string;
  // set_cnt_nm: string;
};
