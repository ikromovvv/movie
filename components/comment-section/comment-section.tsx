"use client";

import { useState } from "react";
import { List, Input, Button, Card, Typography, Space, Rate } from "antd";
import {
    LikeOutlined,
    DislikeOutlined,
    LikeFilled,
    DislikeFilled,
    StarFilled,
} from "@ant-design/icons";
import { useToast } from "@/hooks/use-toast";
import {addComment} from "@/store/slices/moviesSlice";
import {useDispatch} from "react-redux";

const { Paragraph, Text } = Typography;

interface CommentType {
    id: number;
    author: string;
    content: string;
    datetime: string;
    rating?: number; // 1-5
    likes?: number;
    dislikes?: number;
    userAction?: "like" | "dislike" | null;
    isNew?: boolean;
}

interface CommentSectionProps {
    comments: CommentType[];
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
    const [commentList, setCommentList] = useState<CommentType[]>(
        comments.map((c) => ({
            ...c,
            userAction: null,
            isNew: false,
            rating: 0,
        }))
    );
    const [newComment, setNewComment] = useState<string>("");
    const [newRating, setNewRating] = useState<number>(0); // yulduzchalar

    const { toast } = useToast();

    const dispatch = useDispatch()

    const handleAddComment = () => {
        if (!newComment.trim()) {
            toast({ title: "Ogohlantirish", description: "Iltimos, komment kiriting!" })
            return
        }

        const comment: CommentType = {
            id: Date.now(),
            author: "Foydalanuvchi",
            content: newComment,
            datetime: new Date().toLocaleString(),
            likes: 0,
            dislikes: 0,
            userAction: null,
            isNew: true,
            rating: newRating,
        }

        // Lokal state ga qo‘shish
        setCommentList([comment, ...commentList])
        setNewComment("")
        setNewRating(0)

        // Redux store ga qo‘shish
        // @ts-ignore
        dispatch(addComment(comment))
    }
    const handleLike = (id: number) => {
        setCommentList((prev) =>
            prev.map((c) => {
                if (c.id !== id) return c;
                if (c.userAction === "like") return { ...c, likes: (c.likes || 1) - 1, userAction: null };
                if (c.userAction === "dislike")
                    return { ...c, dislikes: (c.dislikes || 1) - 1, likes: (c.likes || 0) + 1, userAction: "like" };
                return { ...c, likes: (c.likes || 0) + 1, userAction: "like" };
            })
        );
    };

    const handleDislike = (id: number) => {
        setCommentList((prev) =>
            prev.map((c) => {
                if (c.id !== id) return c;
                if (c.userAction === "dislike") return { ...c, dislikes: (c.dislikes || 1) - 1, userAction: null };
                if (c.userAction === "like")
                    return { ...c, likes: (c.likes || 1) - 1, dislikes: (c.dislikes || 0) + 1, userAction: "dislike" };
                return { ...c, dislikes: (c.dislikes || 0) + 1, userAction: "dislike" };
            })
        );
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: 500,
                border: "1px solid #e8e8e8",
                borderRadius: 8,
            }}
        >
            <div style={{ flex: 1, overflowY: "auto", padding: 8 }}>
                <List
                    dataSource={commentList}
                    renderItem={(item) => (
                        <List.Item>
                            <Card style={{ width: "100%", position: "relative" }}>
                                {/* Card ustida yulduzchalar */}

                                    {/*<div style={{ position: "absolute", top: 8, right: 8 }}>*/}
                                    {/*    <Rate*/}
                                    {/*        disabled*/}
                                    {/*        defaultValue={item.rating}*/}
                                    {/*        character={({ index }) => (*/}
                                    {/*            <StarFilled*/}
                                    {/*                className={item.rating && item.rating > index ? "text-yellow-400" : "text-gray-300"}*/}
                                    {/*            />*/}
                                    {/*        )}*/}
                                    {/*    />*/}

                                    {/*</div>*/}



                                <Text strong>{item.author}</Text>{" "}
                                <Text type="secondary">{item.datetime}</Text>
                                <Paragraph>{item.content}</Paragraph>
                                <Space>
                                    <Button
                                        icon={item.userAction === "like" ? <LikeFilled /> : <LikeOutlined />}
                                        size="small"
                                        onClick={() => handleLike(item.id)}
                                    >
                                        {item.likes}
                                    </Button>
                                    <Button
                                        icon={item.userAction === "dislike" ? <DislikeFilled /> : <DislikeOutlined />}
                                        size="small"
                                        onClick={() => handleDislike(item.id)}
                                    >
                                        {item.dislikes}
                                    </Button>
                                </Space>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>

            <div style={{ padding: 8, borderTop: "1px solid #e8e8e8" }}>
                <Input.TextArea
                    rows={3}
                    style={{ fontSize: "18px" }}
                    placeholder="Komment yozing..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                {/* Yulduzchalarni tanlash */}
                {/*<div className="mt-2 p-3 w-fit bg-white rounded-md shadow-sm flex items-center">*/}
                {/*    <Text className="mr-2 font-medium">Baho berish:</Text>*/}
                {/*    <Rate*/}
                {/*        value={newRating}*/}
                {/*        onChange={(val) => setNewRating(val)}*/}
                {/*        character={({ index }) => (*/}
                {/*            <div className="relative w-6 h-6 flex items-center justify-center">*/}
                {/*                /!* Tanlanmagan yulduz *!/*/}
                {/*                <div className="w-full h-full flex items-center justify-center">*/}
                {/*                    <StarFilled className="text-gray-800 z-0" />*/}
                {/*                </div>*/}


                {/*            </div>*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</div>*/}

                <Button type="primary" onClick={handleAddComment} style={{ marginTop: 8 }}>
                    Qo'shish
                </Button>
            </div>
        </div>
    );
};
