import pandas as pd
import numpy as np
import datetime

# --- Tham số cấu hình ---
N_NORMAL = 1000
N_ANOMALOUS_WAREHOUSE = 15
N_ANOMALOUS_SHIPPING = 15
OUTPUT_FILE = 'shipment_data.csv'

# --- Định nghĩa khoảng thời gian cho dữ liệu BÌNH THƯỜNG ---
# (Đơn vị: ngày)
WAREHOUSE_TIME_NORMAL = (5, 15)
SHIPPING_TIME_NORMAL = (2, 7)

# --- Định nghĩa khoảng thời gian cho dữ liệu BẤT THƯỜNG ---
# (Đơn vị: ngày)
WAREHOUSE_TIME_ABNORMAL_LONG = (60, 120) # Quá dài
SHIPPING_TIME_ABNORMAL_SHORT = (0.1, 0.5) # Quá ngắn


def create_shipment_data(n_rows, warehouse_days_range, shipping_days_range, label):
    """Hàm pomoc để tạo DataFrame cho một loại dữ liệu cụ thể."""
    
    # 1. Tạo ngày sản xuất ngẫu nhiên trong 2 năm qua
    base_dates = np.random.randint(
        pd.Timestamp('2023-01-01').value // 10**9,
        pd.Timestamp('2024-10-01').value // 10**9,
        n_rows
    )
    df = pd.DataFrame()
    df['ProductionDate'] = pd.to_datetime(base_dates, unit='s')
    
    # 2. Thời gian từ sản xuất đến nhập kho (ví dụ: 0.1 - 1 ngày)
    delay_to_warehouse = pd.to_timedelta(np.random.uniform(0.1, 1, n_rows), unit='D')
    df['WarehouseEntryDate'] = df['ProductionDate'] + delay_to_warehouse
    
    # 3. Thời gian ở kho (dựa trên tham số)
    time_in_warehouse = pd.to_timedelta(
        np.random.uniform(warehouse_days_range[0], warehouse_days_range[1], n_rows), 
        unit='D'
    )
    df['ShippingDate'] = df['WarehouseEntryDate'] + time_in_warehouse
    
    # 4. Thời gian vận chuyển (dựa trên tham số)
    time_shipping = pd.to_timedelta(
        np.random.uniform(shipping_days_range[0], shipping_days_range[1], n_rows), 
        unit='D'
    )
    df['RetailerArrivalDate'] = df['ShippingDate'] + time_shipping
    
    # 5. Gán nhãn
    df['Label'] = label
    
    return df

# --- Hàm chính để thực thi ---
def main():
    print(f"Bắt đầu tạo dữ liệu mô phỏng...")

    # 1. Tạo dữ liệu bình thường
    df_normal = create_shipment_data(
        N_NORMAL,
        WAREHOUSE_TIME_NORMAL,
        SHIPPING_TIME_NORMAL,
        'normal'
    )

    # 2. Tạo dữ liệu bất thường - Ở kho quá lâu
    df_abnormal_warehouse = create_shipment_data(
        N_ANOMALOUS_WAREHOUSE,
        WAREHOUSE_TIME_ABNORMAL_LONG, # Bất thường
        SHIPPING_TIME_NORMAL,       # Bình thường
        'abnormal_warehouse'
    )

    # 3. Tạo dữ liệu bất thường - Vận chuyển quá nhanh
    df_abnormal_shipping = create_shipment_data(
        N_ANOMALOUS_SHIPPING,
        WAREHOUSE_TIME_NORMAL,        # Bình thường
        SHIPPING_TIME_ABNORMAL_SHORT, # Bất thường
        'abnormal_shipping'
    )

    # 4. Ghép tất cả dữ liệu lại
    df_final = pd.concat([df_normal, df_abnormal_warehouse, df_abnormal_shipping], ignore_index=True)

    # 5. Xáo trộn dữ liệu (quan trọng!)
    # frac=1 nghĩa là lấy 100% dữ liệu, .reset_index để reset chỉ số sau khi xáo trộn
    df_final = df_final.sample(frac=1).reset_index(drop=True)

    # 6. Thêm ID cho lô hàng
    df_final.insert(0, 'ShipmentID', ['SID' + str(10000 + i) for i in range(len(df_final))])
    
    # 7. Định dạng lại ngày tháng cho dễ đọc (tùy chọn)
    date_cols = ['ProductionDate', 'WarehouseEntryDate', 'ShippingDate', 'RetailerArrivalDate']
    for col in date_cols:
        df_final[col] = df_final[col].dt.strftime('%Y-%m-%d %H:%M:%S')

    # 8. Lưu ra file CSV
    df_final.to_csv(OUTPUT_FILE, index=False, encoding='utf-8')
    
    total_rows = len(df_final)
    print(f"Hoàn tất! Đã tạo file '{OUTPUT_FILE}' với {total_rows} dòng.")
    print(f"Kiểm tra phân bổ nhãn:\n{df_final['Label'].value_counts()}")

if __name__ == "__main__":
    main()