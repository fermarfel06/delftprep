"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUserStore } from "@/lib/store/userStore";

export default function SettingsPage() {
  const { isAuthenticated, user } = useUserStore();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }
    if (user) {
      setEmail(user.email);
    }
  }, [isAuthenticated, user, router]);

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdatingEmail(true);
    setEmailMessage("");

    try {
      // TODO: Replace with actual API call to PATCH /api/user/email
      await new Promise((resolve) => setTimeout(resolve, 500));
      setEmailMessage("Email updated successfully!");
    } catch (error) {
      setEmailMessage("Failed to update email. Please try again.");
    } finally {
      setIsUpdatingEmail(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMessage("");

    if (newPassword !== confirmPassword) {
      setPasswordMessage("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordMessage("Password must be at least 8 characters");
      return;
    }

    setIsUpdatingPassword(true);

    try {
      // TODO: Replace with actual API call to PATCH /api/user/password
      await new Promise((resolve) => setTimeout(resolve, 500));
      setPasswordMessage("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setPasswordMessage("Failed to update password. Please try again.");
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmed) return;

    const doubleConfirm = window.confirm(
      "This will permanently delete all your data. Are you absolutely sure?"
    );

    if (!doubleConfirm) return;

    try {
      // TODO: Replace with actual API call to DELETE /api/user
      await new Promise((resolve) => setTimeout(resolve, 500));
      alert("Account deleted successfully");
      router.push("/");
    } catch (error) {
      alert("Failed to delete account. Please try again.");
    }
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Account Settings</h1>
            <p className="text-xl text-muted-foreground">
              Manage your account preferences and security
            </p>
          </div>

          {/* Account Info */}
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Your current account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Name</Label>
                <p className="text-lg">{user.name}</p>
              </div>
              <div className="grid gap-2">
                <Label>Email</Label>
                <p className="text-lg">{user.email}</p>
              </div>
              <div className="grid gap-2">
                <Label>Current Plan</Label>
                <div className="flex items-center gap-2">
                  <Badge className="capitalize">{user.tier}</Badge>
                  <Button variant="link" className="h-auto p-0" asChild>
                    <a href="/pricing">Upgrade Plan</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Update Email */}
          <Card>
            <CardHeader>
              <CardTitle>Update Email</CardTitle>
              <CardDescription>
                Change the email address associated with your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateEmail} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">New Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {emailMessage && (
                  <div
                    className={`text-sm ${
                      emailMessage.includes("success")
                        ? "text-primary"
                        : "text-destructive"
                    }`}
                  >
                    {emailMessage}
                  </div>
                )}

                <Button type="submit" disabled={isUpdatingEmail}>
                  {isUpdatingEmail ? "Updating..." : "Update Email"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Change Password */}
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password to keep your account secure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdatePassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    At least 8 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                {passwordMessage && (
                  <div
                    className={`text-sm ${
                      passwordMessage.includes("success")
                        ? "text-primary"
                        : "text-destructive"
                    }`}
                  >
                    {passwordMessage}
                  </div>
                )}

                <Button type="submit" disabled={isUpdatingPassword}>
                  {isUpdatingPassword ? "Updating..." : "Change Password"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Irreversible actions that affect your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Delete Account</h3>
                <p className="text-sm text-muted-foreground">
                  Once you delete your account, there is no going back. This
                  will permanently delete all your data, including your progress
                  and purchased access.
                </p>
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                  className="mt-2"
                >
                  Delete My Account
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Developer Note */}
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-sm font-mono">
                Developer Note
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-mono text-muted-foreground space-y-2">
              <p>TODO: These settings currently use mock functions. Implement:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>PATCH /api/user/email - Update user email</li>
                <li>PATCH /api/user/password - Update user password</li>
                <li>DELETE /api/user - Delete user account</li>
                <li>Email verification for email changes</li>
                <li>Two-factor authentication options</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
