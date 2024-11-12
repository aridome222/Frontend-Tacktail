import supabase from '../../utils/supabase';

type storageProps = {
  file: File;
  bucketName: string;
  cocktailId: number;
  username: string;
};

// Supabase のストレージへファイルをアップロードする処理
export const uploadStorage = async ({
  file,
  bucketName,
  cocktailId,
  username,
}: storageProps): Promise<string> => {
  // 引数に与えた username と cocktailId で誰の何のカクテルかを判別する。
  // TODO: アップロードされた画像と同じ拡張子でアップロードする処理の実装
  const pathName = `cocktails/${username}_${String(cocktailId)}.jpeg`;
  const { data, error } = await supabase.storage.from(bucketName).upload(pathName, file, {
    cacheControl: '3600',
    upsert: true,
  });
  if (error) throw error;
  return data?.path ?? '';
};

// Supabase のストレージからファイルをダウンロードする処理
export const downloadStorage = async ({
  bucketName,
  cocktailId,
  username,
}: Omit<storageProps, 'file'>): Promise<string | null> => {
  const pathName = `cocktails/${username}_${String(cocktailId)}.jpeg`;
  const { data, error } = await supabase.storage.from(bucketName).download(pathName);

  if (error) throw new Error(`Failed to download file: ${error.message}`);

  // ストレージにファイルが存在する場合は、ダウロードしたファイルの一時的な URL を返す
  if (data) {
    console.log(URL.createObjectURL(data));
    return URL.createObjectURL(data);
  }

  // ストレージにファイルが存在しない場合
  return null;
};
